import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';  // the same folder ./ 
import ApprovalCard from './ApprovalCard'; 

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Which super power do you have? </h4>
                    Are you sure? Booger vision? 
                </div>
            </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail author="Andrew" 
                timeAgo="May 12 at 4:00 pm" 
                text="I love you, Jessica"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard> 
            <CommentDetail 
            author="Jessica"  
            timeAgo="May 13 at 1:00 pm" 
            text="I love you, Andrew" 
            avatar={faker.image.avatar()} 
            />   
            </ApprovalCard>

            <ApprovalCard> 
            <CommentDetail 
            author="Fraser" 
            timeAgo="May 14 at 4:00 pm" 
            text= "We will go to Paris together" 
            avatar={faker.image.avatar()} 
            />   
            </ApprovalCard>

        </div>
    );
}; 

ReactDOM.render(<App />, document.querySelector('#root'))
