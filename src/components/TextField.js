// import React from 'react';
// import { ErrorMessage, useField } from 'formik';
// import { makeStyles, createStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     inputField: {
//       '& .MuiTextField-root': {
//         width: '100%',
//       },
//     },
//   })
// );

// const TextField = ({ label, ...props }) => {
//   const classes = useStyles();
//   const [field, meta] = useField(props);
//   return (
//     <div>
//       <div className={classes.inputField}>
//         <TextField
//           className={`formControl ${
//             meta.touched && meta.error && 'is-invalid'
//           }`}
//           {...field}
//           {...props}
//           autoComplete='off'
//         />
//         <ErrorMessage label={field.label} />
//       </div>
//     </div>
//   );
// };

// export default TextField;
