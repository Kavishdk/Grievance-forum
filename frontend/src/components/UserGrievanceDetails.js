import { useGrievancesContext } from "../hooks/useGrievancesContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const UserGrievanceDetails = ({ grievance }) => {
    const { dispatch } = useGrievancesContext();
    const { user } = useAuthContext();

    const handleClick = async () => {
        if (!user) {
            return;
        }

        const response = await fetch('/api/grievances/' + grievance._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });

        if (response.ok) {
            const json = await response.json();
            dispatch({ type: 'DELETE_GRIEVANCE', payload: json });
        }
    }

    return (
        <div className="grievance-details">
            <h4>{grievance.title}</h4>
            {/* <hr style={{
                maxWidth:"80%"
            }}/> */}
            <p><strong>Description:</strong> {grievance.description}</p>
            <p><strong>User Type:</strong> {grievance.userType}</p>
            <p><strong>Department:</strong> {grievance.department}</p>
            <p><strong>Category:</strong> {grievance.category}</p>
            <p><strong>Priority:</strong> <span className={`priority-badge ${grievance.priority?.toLowerCase()}`}>{grievance.priority}</span></p>
            {grievance.imageUrl && (
                <div className="grievance-image" style={{ margin: '10px 0' }}>
                    <p><strong>Attachment:</strong></p>
                    <img
                        src={`/${grievance.imageUrl.replace(/\\/g, '/')}`}
                        alt="Grievance Attachment"
                        style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                    />
                </div>
            )}
            <p className="posted-time">{formatDistanceToNow(new Date(grievance.createdAt), { addSuffix: true })}</p>
            {user && (
                <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
            )}
            <hr />
            <p><strong>Status:</strong> <span className={`status-badge ${grievance.status}`}>{grievance.status}</span></p>
            <p><strong>Response:</strong> {grievance.reply}</p>
        </div>
    );
}

export default UserGrievanceDetails;
