import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { default as addSomeDays } from "date-fns/addDays";
import { default as subSomeDays } from "date-fns/subDays";
import { default as dateTime } from 'date-and-time';

export const DateTimePicker: React.FC<{
    date: Date;
    setDate: (date: Date) => void;
    addHrs?: number;
    addDays?: number;
    subDays?: number;
}> = ({ date, setDate, addHrs = 0, addDays = 365, subDays = 0 }) => {
    return (
        <DatePicker
            selected={date}
            onChange={(dt) => {
                if (dt) setDate(dt)
            }}
            // showTimeSelect
            minDate={subSomeDays(new Date(), subDays)}
            maxDate={addSomeDays(new Date(), addDays)}
            // minTime={   dateTime.subtract(new Date(dateTime.format(date, 'YYYY-MM-DD')), new Date(dateTime.format(new Date(), 'YYYY-MM-DD'))).toDays() > 0 ? setHours(setMinutes(new Date(), 0), 0) : dateTime.addHours(new Date(bookMinTime()), addHrs)}
            // maxTime={setHours(setMinutes(new Date(), 50), 23)}
            // timeIntervals={10}
            dateFormat="MMMM d, yyyy"
            className="form-control"
            placeholderText="Click to select a date"
        />
    );
};