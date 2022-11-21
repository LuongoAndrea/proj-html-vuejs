// import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    logo: 'src/assets/images/medical_logo_2x_light',
    
    navUl:[
        {
            name: 'home',
            url: '#',
            index: 0,
            isActive: true
        },
        {
            name: 'abaut',
            url: '#',
            index: 1,
            isActive: false
        },
        {
            name: 'departments',
            url: '#',
            index: 2,
            isActive: false
        },
        {
            name: 'article',
            url: '#',
            index: 3,
            isActive: false
        },
    ],
    btn:[
        'make appointment',
        'learn more',
        'view our departments'
    ]
})
