var flashvars = {};
var params = {
    wmode: "opaque",
    bgcolor: "#000000",
    scale: "noborder"
};
var attributes = {};

swfobject.embedSWF("bg.swf", "animatedBg", screen.width, screen.height, "9.0.0", "expressInstall.swf", flashvars, params, attributes);