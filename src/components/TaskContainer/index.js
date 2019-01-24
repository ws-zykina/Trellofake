import React from 'react'
import '../ListContainer';
import Button from '../../components/Button';
import Icon from '../Icon';
import { DragSource, DropTarget } from 'react-dnd'

const TaskContainer = ({ taskInfo, handleDeleteClick, connectDragSource,
    connectDropTarget,
    isOver,
    isDragging }) => {
    return connectDropTarget(connectDragSource(
        <div className="list-task"> {taskInfo.name}
            <Button className={'delete-button'} onClick={() => handleDeleteClick('deleteTask')}>
                <Icon iconName='fa-times' />
            </Button>
        </div>
    ))
}

const cardSource = {
    beginDrag(props) {
      return {
        id: props.id
      }
    }
  }

  function dragCollect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
  }

  const cardTarget = {
    drop(props, monitor) {
      return {
        dropId: props.id
      }
    },
    canDrop(props, monitor) {
      return props.id !== monitor.getItem().id
    }
  }

  function dropCollect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    }
  }

  export default DropTarget('CARD', cardTarget, dropCollect)(
    DragSource('CARD', cardSource, dragCollect)(TaskContainer)
  );