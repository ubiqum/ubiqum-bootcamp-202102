const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/jurisdiction', component: Jurisdiction },
        { path: '/senate', component: Senate },
        { path: '/house', component: House },
        { path: '/senate-loyalty', component: SenateLoyalty },
        { path: '/senate-attendance', component: SenateAttendance },
        { path: '/house-loyalty', component: HouseLoyalty },
        { path: '/house-attendance', component: HouseAttendance }
    ]

})