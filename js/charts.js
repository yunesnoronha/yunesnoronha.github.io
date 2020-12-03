var skillTechnologyChar = new Chart(document.getElementById("skillTechnology"), {
    "type": "horizontalBar",
    "data": {
    "labels": ["C#", "Nodejs", "SQL", "Scrum", "React", "Python", "Asp.Net MVC"],
    "datasets": [{
    "label": "Skill technology",
    "data": [8, 2, 10, 4, 2, 3, 8],
    "fill": false,
    "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
    "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)",
    "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"
    ],
    "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
    "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"
    ],
    "borderWidth": 1
    }]
    },
    "options": {
    "scales": {
    "xAxes": [{
    "ticks": {
    "beginAtZero": true
    }
    }]
    }
    }
    });


    var personalSkillChar = new Chart(document.getElementById("personalSkill"), {
        "type": "horizontalBar",
        "data": {
        "labels": ["problem solving", "Teamwork", "written communication", "Leadership"],
        "datasets": [{
        "label": "Skill technology",
        "data": [90, 85, 75, 70],
        "fill": false,
        "backgroundColor": ["RGBA(77,183,141,0.37)","RGBA(77,183,141,0.37)","RGBA(77,183,141,0.37)","RGBA(77,183,141,0.37)"
        ],
        "borderColor": ["RGB(77,183,141)","RGB(77,183,141)","RGB(77,183,141)","RGB(77,183,141)"
        ],
        "borderWidth": 1
        }]
        },
        "options": {
        "scales": {
        "xAxes": [{
        "ticks": {
        "beginAtZero": true
        }
        }]
        }
        }
        });