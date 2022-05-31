import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Vendor',
        data: [22,70,20,90,36,80,30,91,60,20]
    }, {
        name: 'Trainer',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "Serial",
        "Username",
        "LastLogin",
        "LastIP",
        "OSInformation",
        "Location",
        "Status"
    ],
    body: [
        {
            Serial: "1",
            Username: "Aviral",
            LastLogin: "17 Jun 2021",
            LastIP: "192.11.178",
            OSInformation: "pc",
            Location: "11",
            Status: "Offline"
        },
        {
            Serial: "2",
            Username: "Ankit",
            LastLogin: "17 Jun 2021",
            LastIP: "192.11.178",
            OSInformation: "pc",
            Location: "11",
            Status: "Online"
        },
        {
            Serial: "3",
            Username: "Anay",
            LastLogin: "17 Jun 2021",
            LastIP: "192.11.178",
            OSInformation: "pc",
            Location: "11",
            Status: "Online"
        },
        {
            Serial: "4",
            Username: "Ankit",
            LastLogin: "17 Jun 2021",
            LastIP: "192.11.178",
            OSInformation: "pc",
            Location: "11",
            Status: "Offline"
        },
        {
            Serial: "5",
            Username: "Anay",
            LastLogin: "17 Jun 2021",
            LastIP: "192.11.178",
            OSInformation: "pc",
            Location: "11",
            Status: "Online"
        }
    ]
}

const orderStatus = {
    "Online": "primary",
    "pending": "warning",
    "paid": "success",
    "Offline": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.Serial}</td>
        <td>{item.Username}</td>
        <td>{item.LastLogin}</td>
        <td>{item.LastIP}</td>
        <td>{item.OSInformation}</td>
        <td>{item.Location}</td>
        {/* <td>{item.Status}</td> */}
        <td>
            <Badge type={orderStatus[item.Status]} content={item.Status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2  className="page-header">Dashboard</h2>
            <div className="row">
                 <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div> 
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                {/* <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div> */}
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Last Login Details</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
