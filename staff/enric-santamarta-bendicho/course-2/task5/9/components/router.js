const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/jurisdiction', component: Jurisdiction },
        { path: '/senate-data', component: SenateData },
        { path: '/house-data', component: HouseData },
        { path: '/senate-loyalty', component: SenateLoyalty },
        { path: '/senate-attendance', component: SenateAttendance },
        { path: '/house-loyalty', component: HouseLoyalty },
        { path: '/house-attendance', component: HouseAttendance }
    ]

})