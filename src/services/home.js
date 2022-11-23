import request from './request'

export function getHomeList(name) {
    return request.post({
        url:'',
        params:{
            name
        }
    })
}
export const getMessage = (age) => {
    return new Promise((resolve,reject) => {
           setTimeout(() => {
            resolve({
                title: [
                    {
                        name: 'SMT-1',
                    },  
                    {
                        name: 'SMT-2',
                    }, 
                    {
                        name: 'SMT-3',
                    }  
                ],
                work: 'WORK20220225002',
                into: 45612,
                output: 32145,
                dayInto: 32149,
                dayOutput: 12349,
                bad: 12341,
            
            })
            // throw Error ('错')
           },1000)
    })
} 

export const getTimes = () => {
    return new Date().getTime()
}
