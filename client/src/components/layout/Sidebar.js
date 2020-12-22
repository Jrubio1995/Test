import React from 'react';
import NewProject from '../../components/projects/NewHobby';
import ProjectList from '../../components/projects/HobbyList';

const Sidebar = () => {
    return (
        <aside>
            <h1>Hobbies <span>& Tasks</span></h1>
            <NewProject />
            <div className="projects">
                <h2>Hobbies</h2>
                <ProjectList />
            </div>
        </aside>
    )
}

export default Sidebar;
