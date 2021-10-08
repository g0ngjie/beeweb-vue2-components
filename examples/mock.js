export const columns = [{
    "ele": "date-picker",
    "prop": "year",
    "label": "年11",
    "type": "year",
    "format": "yyyy年",
    "valueFormat": "yyyy"
},
{
    "ele": "date-picker",
    "prop": "month",
    "label": "月22",
    "type": "month",
    "format": "M月",
    "valueFormat": "M"
},
{
    "ele": "date-picker",
    "prop": "day",
    "label": "日",
    "type": "date",
    "format": "d日",
    "valueFormat": "d"
},
{
    "ele": "time-picker",
    "prop": "cycleTime",
    "label": "时分秒",
    "valueFormat": "HH:mm:ss"
}
]

export const rules = {
    "year": [{
        "required": true,
        "message": "请选择年",
        "trigger": "blur"
    }],
    "month": [{
        "required": true,
        "message": "请选择月",
        "trigger": "blur"
    }],
    "day": [{
        "required": true,
        "message": "请选择日",
        "trigger": "blur"
    }],
    "cycleTime": [{
        "required": true,
        "message": "请选择时分秒",
        "trigger": "blur"
    }]
}