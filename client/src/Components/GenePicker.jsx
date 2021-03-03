import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { VariableSizeList } from 'react-window';
import { Typography } from '@material-ui/core';
import { protein_coding_genes } from "./Config";



export default function GenePicker(props) {
    const LISTBOX_PADDING = 8; // px

    function renderRow(props) {
        const { data, index, style } = props;
        return React.cloneElement(data[index], {
            style: {
                ...style,
                top: style.top + LISTBOX_PADDING,
            },
        });
    }

    const OuterElementContext = React.createContext({});

    const OuterElementType = React.forwardRef((props, ref) => {
        const outerProps = React.useContext(OuterElementContext);
        return <div ref={ref} {...props} {...outerProps} />;
    });

    function useResetCache(data) {
        const ref = React.useRef(null);
        React.useEffect(() => {
            if (ref.current != null) {
                ref.current.resetAfterIndex(0, true);
            }
        }, [data]);
        return ref;
    }

    // Adapter for react-window
    const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
        const { children, ...other } = props;
        const itemData = React.Children.toArray(children);
        const theme = useTheme();
        const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
        const itemCount = itemData.length;
        const itemSize = smUp ? 36 : 48;

        const getChildSize = (child) => {
            if (React.isValidElement(child) && child.type === ListSubheader) {
                return 48;
            }

            return itemSize;
        };

        const getHeight = () => {
            if (itemCount > 8) {
                return 8 * itemSize;
            }
            return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
        };

        const gridRef = useResetCache(itemCount);

        return (
            <div ref={ref}>
                <OuterElementContext.Provider value={other}>
                    <VariableSizeList
                        itemData={itemData}
                        height={getHeight() + 2 * LISTBOX_PADDING}
                        width="100%"
                        ref={gridRef}
                        outerElementType={OuterElementType}
                        innerElementType="ul"
                        itemSize={(index) => getChildSize(itemData[index])}
                        overscanCount={5}
                        itemCount={itemCount}
                    >
                        {renderRow}
                    </VariableSizeList>
                </OuterElementContext.Provider>
            </div>
        );
    });

    ListboxComponent.propTypes = {
        children: PropTypes.node,
    };

    const useStyles = makeStyles({
        listbox: {
            boxSizing: 'border-box',
            '& ul': {
                padding: 0,
                margin: 0,
            },
        },
    });

    const OPTIONS = protein_coding_genes;

    const renderGroup = (params) => [
        <ListSubheader key={params.key} component="div">
            {params.group}
        </ListSubheader>,
        params.children,
    ];

    const [value, setValue] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');
    //   console.log(diseases)

    let handleSelectGene = (newValue) => {
        props.handleSelectGene(newValue);
        setValue(newValue);
    }

    return (
        <div style={{ marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10 }}>
            {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div> */}
            <br />
            <Autocomplete
                id="virtualize-demo"
                // style={{ width: 300 }}
                disableListWrap
                // classes={classes}
                style={{ marginLeft: 10, marginRight: 10 }}
                value={value}
                onChange={(event, newValue) => {
                    handleSelectGene();
                }}
                ListboxComponent={ListboxComponent}
                renderGroup={renderGroup}
                options={OPTIONS}
                groupBy={(option) => option[0].toUpperCase()}
                renderInput={(params) => <TextField {...params} variant="outlined" label="10,000 options" />}
                renderOption={(option) => <Typography noWrap>{option}</Typography>}
            />
            {/* <Autocomplete
                // no need for clear icon
                disableClearable

                // no need for the dropdown arrow
                freeSolo
                style={{ marginLeft: 10, marginRight: 10 }}
                value={value}
                onChange={(event, newValue) => {
                    handleSelectGene();
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="GenePicker"
                options={protein_coding_genes}
                renderOption={(option) => (
                    <div style={{ width: 200, boxShadow: "0 0px 0px rgba(0, 0, 0, 0.15)", fontSize: "1.3rem", color: "black", textRendering: "optimizeLegibility ", textTransform: "None", textSizeAdjust: "none", fontWeight: "normal", fontStyle: "normal", fontKerning: "normal" }}>
                        {option}
                    </div>
                )}
                renderInput={(params) => <TextField {...params}
                    InputProps={{
                        ...params.InputProps,
                        style: {
                            fontSize: "1.3rem",
                        },
                    }}
                    label="" variant="outlined" />}
            /> */}
        </div>
    );
}







export default function Virtualize() {
    const classes = useStyles();

    return (
        <Autocomplete
            id="virtualize-demo"
            style={{ width: 300 }}
            disableListWrap
            classes={classes}
            ListboxComponent={ListboxComponent}
            renderGroup={renderGroup}
            options={OPTIONS}
            groupBy={(option) => option[0].toUpperCase()}
            renderInput={(params) => <TextField {...params} variant="outlined" label="10,000 options" />}
            renderOption={(option) => <Typography noWrap>{option}</Typography>}
        />
    );
}
