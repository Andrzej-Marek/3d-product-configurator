import Flatpickr from "react-flatpickr";
import TextInput from "../TextInput/TextInput";
import "flatpickr/dist/flatpickr.css";

type DatePickerProps = {};

const DatePicker = ({}: DatePickerProps) => {
  return (
    //     <Flatpickr
    //       render={({ defaultValue, value, ...props }, ref) => {
    //         return <TextInput value={defaultValue} ref={ref} {...props} />;
    //       }}
    //     />
    <Flatpickr
      data-enable-time
      value={"22.12.22"}
      onChange={([date]) => {
        console.log([date]);
        //   this.setState({ date });
      }}
    />
  );
};

export default DatePicker;
