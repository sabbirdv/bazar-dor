
const date = new Date().toLocaleString('bn-BD', {
        dateStyle: 'full',
    });
    
const DateBn = () => {
    

    return (
        <div>
            {date}
        </div>
    );
};

export default DateBn;