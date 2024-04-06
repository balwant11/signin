import styles from './Dashboard.module.css'

function Dashboard() {
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
        <select>
            <option>Dashboard</option>
                <option>- Sales</option>  
                <option>- Analytics</option> 
                <option>- Finance</option> 
                <option>- Crypto</option> 
        </select>
  </div>
  <div className={styles.App}>
   <ul>
    <li>Chat</li>
    <li>Mailbox</li>
    <li>Todo List</li>
    <li>Notes</li>
    <li>Scrumboard</li>
    <li>Contacts</li>
    <li>Invoice</li>
    <li>Calender</li>
   </ul>
  </div>
        </div>
  
  )
}

export default Dashboard