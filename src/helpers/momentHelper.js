import * as moment from 'moment';

const momentHelper = (str) => ({
  time: moment(str).format('HH:mm')
});

export default momentHelper;
