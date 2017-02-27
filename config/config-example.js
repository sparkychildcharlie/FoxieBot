﻿'use strict';
// info of the server you're trying to connect to
// this has to be filled in
exports.info = {
    server: "sim.smogon.com",
    port: 8000,
    serverid: "showdown",
};

// information regarding the bot's login information
// it can be left blank
exports.bot = {
    name: "Bot's username",
    pass: "",
};

// this is the command character used in PMs and public rooms that do not specify what command character they want
exports.defaultCharacter = ["+"];

// minimum rank for using a command unless specified.
exports.defaultRank = "@";

// If this is disabled, monitor will not run.
exports.monitorDefault = true;

// Reload the bot's config file if changes are found as the bot is running.
exports.watchConfig = true;

// select what you want displaying on the bot's console.
exports.logging = ["info", "error", "join", "left", "ok", "monitor"];

// not yet supported, best to leave empty
exports.secprotocols = [];

// The users who have developer access over the bot.
// It's recommended you at least keep sparkychild in here, in case you need
// help with your bot.
exports.developers = ["sparkychild", "littlevixen"];

// order of the ranks, a value of 2 and above means user is staff.
exports.ranks = {
    " ": 0,
    "+": 1,
    //player
    "★": 1.3,
    //operator
    "$": 1.5,
    "%": 2,
    "@": 3,
    "&": 4,
    "#": 5,
    "~": 6,
};

// commands settable using +set
exports.settableCommands = {
    "say": true,
    "lenny": true,
    "games": true,
    "addcom": true,
    "settings": true,
    "banword": true,
    "autoban": true,
    "usage": true,
};

// settable aspects of moderation
exports.modSettings = {
    "caps": true,
    "flooding": true,
    "spam": true,
    "face": true,
    "stretching": true,
    "bannedwords": true,
}

// commands that do not trigger monitor
exports.whitelistCommands = {
    "g": true,
    "pass": true,
};
// commands users can still used when bot locked
// done so that bot locks/mutes do not affect the user.
exports.lockedCommands = {
    "set": true,
    "autoban": true,
    "banword": true,
    "regexbanword": true,
    "settings": true,
    "setprivate": true,
};
// bot rank permissions
// these permissions are only for bot ranks
// defines what moderation each rank is able to do.
exports.permissions = {
    " ": new Object(),
    "+": {
        games: true,
    },
    "%": {
        lock: ["+", " "],
        mute: ["+", " "],
        games: true,
    },
    "@": {
        lock: ["%", "+", " "],
        mute: ["%", "+", " "],
        ban: ["%", "+", " "],
        games: true,
        promote: ["+", " "],
    },
    "~": {
        lock: ["~", "@", "%", "+", " "],
        mute: ["~", "@", "%", "+", " "],
        ban: ["~", "@", "%", "+", " "],
        games: true,
        promote: ["@", "%", "+", " "],
        bypassall: true,
    },
};
