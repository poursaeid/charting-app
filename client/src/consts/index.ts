/**
 * TradingView configs 
 */

// tv library cdn
export const ChartSRC = 'https://s3.tradingview.com/tv.js';
// HTML Element ids 
export const ChartID = 'tradingview-widget-loading-script';
export const ContainerID = 'tradingview_f2124';
// default options to render the chart
export const WidgetOptions = {
    enable_publishing: true,
    range: "YTD",
    details: true,
    hotlist: true,
    calendar: true,
    container_id: ContainerID,
    width: 1080,
    height: 720,
    // width: "100%",
    // height: "100%",
    // autosize: true,
    symbol: "BTC",
    interval: "D",
    timezone: "exchange",
    theme: "light",
    style: "1",
    // toolbar_bg: "#f1f3f6",
    withdateranges: true,
    hide_side_toolbar: false,
    allow_symbol_change: true,
    save_image: true,
    studies: ["ROC@tv-basicstudies", "StochasticRSI@tv-basicstudies", "MASimple@tv-basicstudies"],
    show_popup_button: true,
    popup_width: "1000",
    popup_height: "650",
    locale: "en"
}