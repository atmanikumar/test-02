class ChartConfig {
    constructor(){
        this.config = {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: 'Trend of Programming languages'
            },
            credits: {
                enabled: false
            },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Programing languages'
                }
            },
            yAxis: {
                title: {
                    text: 'Count'
                }
        
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                }
            },
        
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },

            series: [],
        };
    }

    getData(){
        return this.config;
    }

    setData(response){

        const data = response.data.items || [];

        const seriesData = data.map((item) => ({
            name: item.name,
            y: item.count,
        }))

        const series = [
            {
                name: "Programming languages",
                colorByPoint: true,
                data: seriesData,
            }
        ]

        this.config = {
            ...this.config,
            series,
        }
    }
}

export default new ChartConfig();