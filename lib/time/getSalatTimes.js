"use strict";

// dependencies
const getJulianDate = require("./getJulianDate");
const TimeUtils = require("./TimeUtils");
const normalizeHours = TimeUtils.normalizeHours;
const SunUtils = require("./SunUtils");

const calculateTimes = opts => {

    // get options
    const now = opts.date || new Date();
    const lngOffset = opts.longitude / 15.0;
    const lat = opts.latitude;
    const timezone = opts.timezone || -now.getTimezoneOffset() / 60.0;
    let precision = opts.precision || 3;

    const angles = opts.angles;
    const asrShadowLength = opts.asrShadowLength;
    const getNightPortion = opts.highLatitudeCorrection;
    const dhuhrOffset = typeof angles.dhuhrOffset !== "undefined";
    const maghribOffset = typeof angles.maghribOffset !== "undefined";
    const ishaOffset = typeof angles.ishaOffset !== "undefined";

    // init
    const julianDate = getJulianDate(now) - lngOffset / 24.0;
    const sunCalc = SunUtils.init(julianDate, lat);

    let times = Array(7).fill(0);

    // Calculate times
    while (precision --> 0) {

        times[0] = sunCalc.computeTime(180 - angles.fajrAngle, times[0]);
        times[1] = sunCalc.computeTime(SunUtils.SUNRISE_ANGLE, times[1]);
        times[2] = sunCalc.computeMidday(times[2]);
        times[3] = sunCalc.computeAsr(asrShadowLength, times[3]);
        times[4] = sunCalc.computeTime(SunUtils.SUNSET_ANGLE, times[4]);
        if (!maghribOffset)
            times[5] = sunCalc.computeTime(angles.maghribAngle, times[5]);
        if (!ishaOffset)
            times[6] = sunCalc.computeTime(angles.ishaAngle, times[6]);
    }

    // Add offsets
    if (dhuhrOffset)   times[2] += angles.dhuhrOffset / 60.0;
    if (maghribOffset) times[5] = times[4] + angles.maghribOffset / 60.0;
    if (ishaOffset)    times[6] = times[5] + angles.ishaOffset    / 60.0;

    // Adjust for timezone
    times = times.map(t => t + timezone - lngOffset);

    // Adjust for high latitudes
    const nightTime = normalizeHours(times[1] - times[4]);

    const fajrDiff = nightTime * getNightPortion(angles.fajrAngle);
    const ishaDiff = nightTime * getNightPortion(ishaOffset ? 18.0 : angles.ishaAngle);
    const maghribDiff = nightTime * getNightPortion(maghribOffset ? 4.0 : angles.maghribAngle);

    if (isNaN(times[0]) || normalizeHours(times[1] - times[0]) > fajrDiff)
        times[0] = times[1] - fajrDiff;
    if (isNaN(times[5]) || normalizeHours(times[5] - times[4]) > maghribDiff)
        times[5] = times[4] + maghribDiff;
    if (isNaN(times[6]) || normalizeHours(times[6] - times[4]) > ishaDiff)
        times[6] = times[4] + ishaDiff;

    // normalize to 24h
    return times.map(normalizeHours);
};

module.exports = calculateTimes;