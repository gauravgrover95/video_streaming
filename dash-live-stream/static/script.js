var player, targetLatency, minDrift, catchupPlaybackRate, liveCatchupLatencyThreshold;

function applyParameters() {
    targetLatency = parseFloat("2", 10);
    minDrift = parseFloat("0.3", 10);
    catchupPlaybackRate = parseFloat("0.3", 10);
    liveCatchupLatencyThreshold = parseFloat("30", 10);

    player.updateSettings({
        streaming: {
            liveDelay: targetLatency,
            liveCatchup: {
                minDrift: minDrift,
                playbackRate: catchupPlaybackRate,
                latencyThreshold: liveCatchupLatencyThreshold,
            }
        }
    });
}
    
var video,
    url = 'https://cmafref.akamaized.net/cmaf/live-ull/2006350/akambr/out.mpd';

video = document.querySelector("#videoPlayer");
player = dashjs.MediaPlayer().create();
player.initialize(video, url, true);
player.updateSettings({ 'streaming': { 'lowLatencyEnabled': true } });
player.updateSettings({ 'debug': { 'logLevel': dashjs.Debug.LOG_LEVEL_WARNING } });

player.updateSettings({
    'streaming': {
        'abr': {
            'useDefaultABRRules': true,
            'ABRStrategy': 'abrL2A'
        }
    }
});
applyParameters();