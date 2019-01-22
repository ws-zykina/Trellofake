import React from 'react'
import '../ListContainer';
import Button from '../../components/Button';
import Icon from '../Icon';

const TaskContainer = ({ taskInfo, handleDeleteClick }) => {
    return (
        <li className="list-task"> {taskInfo.name}
            <Button className={'delete-button'} onClick={() => handleDeleteClick('deleteTask')}>
                <Icon iconName='fa-times' />
            </Button>
        </li>
    )
}
export default TaskContainer