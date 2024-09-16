import React from 'react';

const RecentSalesTable = () => {
    return (
        <table className='table table-borderless datatable'>
            <thead className='table-light'>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Customer</th>
                    <th scope='col'>Product</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Status</th>
                </tr>
            </thead>
            
        </table>
    );
}

export default RecentSalesTable;
