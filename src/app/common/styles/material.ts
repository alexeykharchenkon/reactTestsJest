import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 200,
    minHeight: 25,
    padding: '0 15px',
    fontSize: '16px',
    marginBottom: '10px'
  },
});