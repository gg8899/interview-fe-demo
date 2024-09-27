// 使用 Mock
import Mock from 'mockjs'
const Random = Mock.Random
const login = Mock.mock('/api/user/login', 'post', (data) => {
    const ret = Mock.mock({
        username: '@name',
        ID: Random.id()
    })
    return {
        status: 200,
        data: ret
    }
})
const register = Mock.mock('/api/user/register', 'post', () => {
    return {
        status: 200,
    }
})

export { login, register }
