/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});


export default function HistonModTrackPicker(props) {
  const fixedOptions = [];
  let hisMods = props.available_tracks.filter(value => -1 !== HisMods.indexOf(value))
  const [value, setValue] = React.useState(hisMods);
  React.useEffect(() => {
    if(props.available_tracks){ 
    //execute your code.
    
    let nextHisMods = []
    for (let track of HisMods) {
        if (props.available_tracks.includes(track)){
          nextHisMods.push(track)
        }
    }
    setValue(nextHisMods);
    }
    // console.log('property changed', props.available_tracks);
     },[props.available_tracks])


  return (
    <div>
      <div style={{ marginLeft: -5, marginTop: 8, fontSize: "1.25rem", marginBottom:-10 }} >Histone modifications</div>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        freeSolo
        onChange={(event, newValue) => {
          setValue([
            ...fixedOptions,
            ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
          ]);
          // console.log(newValue)
          props.handleHisModChange(newValue)
        }}
        options={HisMods}

        // for options to be disabled 
        getOptionDisabled={(option) => props.disabledTracks.includes(option)}
        disableClearable
        getOptionLabel={(option) => option}
        renderOption={(option) => (
          <div style={{ boxShadow: "0 0px 0px rgba(0, 0, 0, 0.15)", fontSize: "1.25rem", color:"black", textRendering: "optimizeLegibility ", textTransform:"None",textSizeAdjust:"none", fontWeight: "normal", fontStyle: "normal", fontKerning:"normal"}}>
            {option}
          </div>
        )}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              style={{ marginLeft: 5, marginRight: 5, fontSize: "1.25rem" }}
              label={option}
              {...getTagProps({ index })}
              disabled={fixedOptions.indexOf(option) !== -1}
            />
          ))
        }
        style={{  marginLeft: 5, marginRight: 5, marginTop: 10, marginBottom: 10 }}
        renderInput={(params) => (
          <TextField 

            {...params}
            // change the font of words in input box
            InputProps={{
              ...params.InputProps,
              style: {
                fontSize: "1.4rem",
            },
            }} 
            label="" variant="outlined" placeholder="" />
        )}
      />
    </div>
  );
}

// Represents all the histone modifications to our knowledge
const HisMods = ["H3K4me1", "H3K4me3", "H3K27ac", "H3K9ac"]

// /* eslint-disable no-use-before-define */
// import React from 'react';
// import useAutocomplete from '@material-ui/lab/useAutocomplete';
// import NoSsr from '@material-ui/core/NoSsr';
// import Box from '@material-ui/core/Box';
// import CheckIcon from '@material-ui/icons/Check';
// import CloseIcon from '@material-ui/icons/Close';
// import styled from 'styled-components';

// const Label = styled('label')`
//   padding: 0 0 4px;
//   line-height: 1.5;
//   display: block;
// `;

// const InputWrapper = styled('div')`
//   width: 120px;
//   border-bottom: 1px solid #ccccb3;
//   background-color: #fff;
//   border-radius: 4px;
//   padding: 1px;
//   display: flex;
//   flex-wrap: wrap;
//   margin-left: 10px;
//   margin-right: 10px;

//   &:hover {
//     border-color: #40a9ff;
//   }

//   &.focused {
//     border-color: #40a9ff;
//     box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
//   }

//   & input {
//     font-size: 14px;
//     height: 30px;
//     box-sizing: border-box;
//     padding: 4px 6px;
//     width: 0;
//     min-width: 30px;
//     flex-grow: 1;
//     border: 0;
//     margin: 0;
//     outline: 0;
//   }
// `;

// const Tag = styled(({ label, onDelete, ...props }) => (
//   <div {...props}>
//     <span>{label}</span>
//     <CloseIcon onClick={onDelete} />
//   </div>
// ))`
//   display: flex;
//   font-size:14px;
//   align-items: left;
//   height: 24px;
//   margin: 2px;
//   line-height: 22px;
//   background-color: #fafafa;
//   border: 1px solid #e8e8e8;
//   border-radius: 2px;
//   box-sizing: content-box;
//   padding: 0 4px 0 10px;
//   outline: 0;
//   overflow: hidden;

//   &:focus {
//     border-color: #40a9ff;
//     background-color: #e6f7ff;
//   }

//   & span {
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//   }

//   & svg {
//     font-size: 12px;
//     cursor: pointer;
//     padding: 4px;
//   }
// `;

// const Listbox = styled('ul')`
//   font-size:14px;
//   width: 140px;
//   margin: 2px 0 0;
//   padding: 0;
//   position: absolute;
//   list-style: none;
//   background-color: #fff;
//   overflow: auto;
//   max-height: 250px;
//   border-radius: 4px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//   z-index: 1;

//   & li {
//     padding: 5px 12px;
//     display: flex;

//     & span {
//       flex-grow: 1;
//     }

//     & svg {
//       color: transparent;
//     }
//   }

//   & li[aria-selected='true'] {
//     background-color: #fafafa;
//     font-weight: 600;

//     & svg {
//       color: #1890ff;
//     }
//   }

//   & li[data-focus='true'] {
//     background-color: #e6f7ff;
//     cursor: pointer;

//     & svg {
//       color: #000;
//     }
//   }
// `;

// export default function HistonModTrackPicker() {
//   const {
//     getRootProps,
//     getInputLabelProps,
//     getInputProps,
//     getTagProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//     value,
//     focused,
//     setAnchorEl,
//   } = useAutocomplete({
//     id: 'customized-hook-demo',
//     defaultValue: [],
//     multiple: true,
//     options: HisMods,
//     getOptionLabel: option => option.name,
//   });

//   return (
//     <Box style={{ marginLeft: 0, marginTop: 0, marginRight: 0 }} border={0} borderColor="#ccccb3">
//       <NoSsr>
//         <div>
//           <div {...getRootProps()}>
//             <Label {...getInputLabelProps()} style={{ fontSize: '1.2rem',  fontWeight: "normal", textTransform: 'none',}}>Histone modifications</Label>
//             <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
//               {value.map((option, index) => (
//                 <Tag label={option.name} {...getTagProps({ index })} />
//               ))}

//               <input {...getInputProps()} />
//             </InputWrapper>
//           </div>
//           {groupedOptions.length > 0 ? (
//             <Listbox {...getListboxProps()}>
//               {groupedOptions.map((option, index) => (
//                 <li {...getOptionProps({ option, index })}>
//                   <span>{option.name}</span>
//                   <CheckIcon fontSize="small" />
//                 </li>
//               ))}
//             </Listbox>
//           ) : null}
//         </div>
//       </NoSsr>
//       <div style={{marginTop:8}}></div>
//     </Box>
//   );
// }

// // example histon modification types
// const HisMods = [{name:"H3K4me1"}, {name: "H3K4me3"}, {name:"H3K27ac"}];

// function choose(choices) {
//   var index = Math.floor(Math.random() * choices.length);
//   return choices[index];
// }




