Papa.parse('../social_data.csv', {
    download: true,
    complete: results => {
        var social_db = results.data;
        social_db = my_parsefloat(social_db);
        console.log(social_db);
        google.load("visualization", "1", {packages:["corechart"]});

        document.getElementById('views').addEventListener('click', () => {
            google.charts.setOnLoadCallback(viewChart(social_db));
        })

        document.getElementById('likes').addEventListener('click', () => {
            google.charts.setOnLoadCallback(likeChart(social_db));
        })

        document.getElementById('subs').addEventListener('click', () => {
            google.charts.setOnLoadCallback(subChart(social_db));
        })

        document.getElementById('Vtime').addEventListener('click', () => {
            google.charts.setOnLoadCallback(timeChart(social_db));
        });
    },
    error: error => {
        console.error('Error parsing CSV:', error);
    }
});

function my_parsefloat(csv) {
    var data=[];
    var result = [];
    result.push(csv[0]);
    for(var i = 1; i < csv.length; i++){
        for(var j = 0; j < csv[0].length; j++){
            if( j < 3 ) { 
                data.push(csv[i][j]) 
            }
            else { 
                var num = parseFloat(csv[i][j]);
                data.push(num);
            }
        }
        result.push(data)
        data = []
    }
    return result;
}

function viewChart(social_db){
    var viewdb = [];
    viewdb.push([social_db[0][1], social_db[0][3], { role: 'style'}])

    for(var i = 1; i < social_db.length; i++){
        var temp = [];
        temp.push(social_db[i][1]);
        temp.push(social_db[i][3]);
        temp.push('stroke-color: #00008B; stroke-width: 1; fill-color: #00008B;');
        viewdb.push(temp)
    }

    var data = new google.visualization.arrayToDataTable(viewdb);

    var options = {
        chart: {
            title: "Views analysis by Barchart",
        },
        bars: 'vertical',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total Views',
          minValue: 0
        },
        vAxis: {
          title: 'Title'
        },
        bars: 'vertical',
        colors: ['#3366CC', '#DC3912'],
        legend: {
            position: 'none',
        }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('view_div'));
    chart.draw(data, options)
}

function likeChart(social_db) {
    var likedb = [];
    likedb.push([social_db[0][0], social_db[0][6], { role: 'style'}])

    for(var i = 1; i < social_db.length; i++){
        var temp = [];
        temp.push(social_db[i][0]);
        temp.push(social_db[i][6]);
        temp.push('stroke-color: #00008B; stroke-width: 1; fill-color: #00008B;');
        likedb.push(temp)
    }
    var data = new google.visualization.arrayToDataTable(likedb);
    var options = {
        chart: {
            title: "Views analysis by Barchart",
        },
        bars: 'vertical',
        chartArea: {
            width: '50%',
            height: '20rem'
        },
        hAxis: {
          title: 'Total Views',
          minValue: 0
        },
        vAxis: {
          title: 'Title',
          color: '#001234'
        },
        bars: 'vertical',
        legend: {position: 'none'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('view_div'));
    chart.draw(data, options)

}

function subChart(social_db) {
    var likedb = [];
    likedb.push([social_db[0][1], social_db[0][5], { role: 'style'}])

    for(var i = 1; i < social_db.length; i++){
        var temp = [];
        temp.push(social_db[i][1]);
        temp.push(social_db[i][5]);
        temp.push('stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.2');
        likedb.push(temp)
    }
    var data = new google.visualization.arrayToDataTable(likedb);
    var options = {
        chart: {
            title: "Views analysis by Barchart",
        },
        bars: 'vertical',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total Views',
          minValue: 0
        },
        vAxis: {
          title: 'Title'
        },
        bars: 'vertical',
        legend: {position: 'bottom'}
    };
    var chart = new google.visualization.PieChart(document.getElementById('view_div'));
    chart.draw(data, options)
}

function timeChart(social_db) {
    var timedb = [];
    timedb.push([social_db[0][0], social_db[0][4], { role: 'style'}])

    for(var i = 1; i < social_db.length; i++){
        var temp = [];
        temp.push(social_db[i][0]);
        temp.push(social_db[i][4]);
        temp.push('stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.2');
        timedb.push(temp)
    }
    var data = new google.visualization.arrayToDataTable(timedb);
    var options = {
        chart: {
            title: "Views analysis by Barchart",
        },
        bars: 'vertical',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total Views',
          minValue: 0
        },
        vAxis: {
          title: 'Title'
        },
        legend: {position: 'bottom'}
    };
    var chart = new google.visualization.PieChart(document.getElementById('view_div'));
    chart.draw(data, options)
}
