/*
 *
 * AssignmentListPage
 *
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { setAppbar } from '../Header/actions';
import { actions as classActions } from '../../apis/class';
import describeDeadline from '../../utils/describeDeadline';

import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
} from 'material-ui/Table';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const ClassesContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PlusButton = styled(RaisedButton)`
  margin: 16px;
`;
const OperationContainer = styled(TableRowColumn)`
  display: flex;
  align-items: center;
`;


export class AssignmentListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    getOneInfo: React.PropTypes.func,
    classTitle: React.PropTypes.string,
    setAppbar: React.PropTypes.func,
    getAssignments: React.PropTypes.func,
    assignments: React.PropTypes.arrayOf(React.PropTypes.object),
    routeParams: React.PropTypes.object,
  }

  componentDidMount() {
    this.props.setAppbar({
      title: (<span>
        <FormattedMessage {...messages.header} />
        {this.props.classTitle}
      </span>),
    });
    const { classId } = this.props.routeParams;
    this.props.getAssignments(classId);
    this.props.getOneInfo(classId);
  }

  componentWillReceiveProps(props) {
    if (props.classTitle !== this.props.classTitle) {
      this.props.setAppbar({
        title: (
          <span>
            <FormattedMessage {...messages.header} />
            {props.classTitle}
          </span>
        ),
      });
    }
  }

  render() {
    const tableData = this.props.assignments;

    return (
      <div>
        <Helmet
          title="Assignments"
        />
        <ClassesContainer>
          <div>
            <Table fixedHeader>
              <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn colSpan="3">
                    <HeaderContainer>
                      <h1>Assignments</h1>
                      <PlusButton label="Create" primary />
                    </HeaderContainer>
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Deadline</TableHeaderColumn>
                  <TableHeaderColumn style={{ paddingLeft: 42 }}>Action</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} stripedRows>
                {tableData.map((row, index) => (
                  <TableRow key={index} selectable={false}>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{describeDeadline(row.deadline)}</TableRowColumn>
                    <OperationContainer>
                      <FlatButton label="copy git repo url" primary />
                    </OperationContainer>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ClassesContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { classId } = ownProps.routeParams;
  const classObj = state.getIn(['class', classId]);
  if (!classObj) {
    return { className: '', assignments: [] };
  }
  const classTitle = `${classObj.get('semester')} ${classObj.get('name')}`;
  const role = classObj.get('role');
  const assignmentIds = classObj.get('assignmentIds');
  if (!assignmentIds) {
    return { classTitle, role, assignments: [] };
  }
  const assignmentLists = state.get('assignment');
  const assignments = assignmentIds.map((aid) => {
    const t = assignmentLists.get(aid);
    return t ? t.toJS() : {};
  });
  return { classTitle, role, assignments };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setAppbar,
    getAssignments: classActions.getAssignments,
    getOneInfo: classActions.getOneInfo,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentListPage);
