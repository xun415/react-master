import {useQuery} from "react-query";
import { fetchCoinHistory } from "../api/coin";
import ReactApexChart from "react-apexcharts";
import {useRecoilValue} from "recoil";
import {isDarkAtom} from "../atoms";

interface ChartProps {
    coinId: string;

}
interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Chart({coinId}: ChartProps) {
    const isDark = useRecoilValue(isDarkAtom)
    const { isLoading, data: historicalData } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId))

    return (
        <div>
            {isLoading?
                "Loading chart..."
                :
                <ReactApexChart
                    type="line"
                    series={[
                        {
                            name: "Price",
                            data: historicalData!.map(price=> price.close)
                        },

                    ]}
                    options={{
                        theme: {
                          mode:  isDark? "dark":"light",
                        },
                        chart: {
                            height: 500,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent"
                        },
                        grid: {
                            show: false,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            axisBorder: {
                              show: false,
                            },
                            axisTicks: {
                                show: false,
                            },
                            labels: {
                                show: false,
                            },
                            type: "datetime",
                            categories: historicalData!.map(price=> price.time_close)
                        },
                        stroke: {
                            curve: "smooth",
                            width: 3,
                        },
                        fill: {
                            type: "gradient",
                            gradient : {
                                gradientToColors: ["#0be881"], stops: [0, 100]
                            },
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$ ${value.toFixed(3)}`
                            }
                        },
                    }}
                >
                </ReactApexChart> }
        </div>
    )
}

export default Chart;