import { useEffect, useRef } from 'react'
import { ChartID, ChartSRC, ContainerID, WidgetOptions } from '../consts';

type Props = {}

// TODO: SEPARATE FOLDER FOR CUSTOM TYPES 
// Add property to window object
declare global {
    interface Window { TradingView: any; }
}
window.TradingView = window.TradingView || {};

function TradingViewWidget({ }: Props) {
    const onLoadScriptRef = useRef<any>(null);
    useEffect(() => {

        const renderChart = () => {
            onLoadScriptRef.current = createWidget

            const script = document.createElement('script')
            script.id = ChartID
            script.src = ChartSRC
            script.async = true
            script.type = 'text/javascript';

            script.onload = () => {
                console.log('widget element loaded successfuly');
                onLoadScriptRef.current && onLoadScriptRef.current()
            }
            script.onerror = () => { console.log('Error occurred while loading widget element'); }

            document.head.appendChild(script);

        }

        renderChart()
        return () => {
            onLoadScriptRef.current = null
        }

        function createWidget() {
            if (document.getElementById(ContainerID) && 'TradingView' in window) {
                new window.TradingView.widget(WidgetOptions);
            }
        }
    }, [])

    return (
        <div>
            {/* Chart Container */}
            <div id={ContainerID} />
            {/* Copyright */}
            <div className="tradingview-widget-copyright">
            &copy; Technical Chart by <a href="https://www.tradingview.com/symbols/BTC/?exchange=CRYPTOCAP" rel="noopener" target="_blank"><span className="blue-text">TradingView</span></a> 
            </div>
        </div>
    )
}

export default TradingViewWidget