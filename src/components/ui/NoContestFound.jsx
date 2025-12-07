import React from 'react';
import Button from '../common/Button';

const NoContestFound = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <p className='text-muted-foreground text-lg'>No active contests at the moment</p>
            <Button>Be the First to Create</Button>
        </div>
    );
};

export default NoContestFound;