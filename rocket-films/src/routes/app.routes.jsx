import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'
import { New } from '../pages/New'
import { SignIn } from '../pages/SignIn'

export function AppRoutes() {
    return( 
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/details' element={<Details />}/>
            <Route path='/new' element={<New />}/>
            <Route path='/login' element={<SignIn />}/>
        </Routes>
    )
}