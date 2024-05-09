const express =  require('express')
const router = express.Router()
const cors = require('cors')
const {test1, registerUser, loginUser, getProfile, logoutUser, deleteUser, updateUser} =  require('../controllers/authControllers')

// middleware
router.use(
    cors({
        credentials: true,
        origin: `http://localhost:5173`
    })
)

router.get('/', test1)
// this enpoint defines the registration and where we will store the info in our database
router.post('/register', registerUser)

// login checking for the data base
router.post('/login', loginUser)

router.get('/profile', getProfile)

router.post('/logout', logoutUser)
router.post('/delete', deleteUser)

router.post('/update', updateUser)

module.exports = router