const Table = () => {
    return (
        <table className="w-full border rounded-3xl">
            <tr className="text-sm text-gray-600 font-thin">
                <th className="flex items-center space-x-4 p-3">
                    <div className="w-6 h-6 border border-gray-400 rounded-md"></div>
                    <span>invoice</span>
                </th>
                <th>amount</th>
                <th>date</th>
                <th>status</th>
                <th>users on plan</th>
                <th></th>
            </tr>
        </table>
    );
}
 
export default Table;