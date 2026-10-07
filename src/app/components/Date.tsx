

const DateBn = () => {
    const date = new Date().toLocaleString('bn-BD', {
        dateStyle: 'full',
    });

    return (
        <div>
            {date}
        </div>
    );
};

export default DateBn;