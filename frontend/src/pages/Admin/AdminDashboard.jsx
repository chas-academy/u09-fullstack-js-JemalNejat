/* eslint-disable no-unused-vars */
import './AdminDashboard.css';
import Users from '../../components/Users/Users.jsx';

const AdminDashboard = () => {
  // TODO: send token to server
  // TODO: remove debug logs
  // TODO: add other admin features from admin module

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Users />
    </div>
  )
}

export default AdminDashboard
