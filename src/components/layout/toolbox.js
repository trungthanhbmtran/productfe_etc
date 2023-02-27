import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import { Box } from '@mui/material';
import { Colors } from '../../lib/theme';

const ToolBox = () => {
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'fixed', bottom: 10, left: 16 }}
            icon={<SpeedDialIcon />}
            FabProps={{
                sx: {
                  bgcolor: 'secondary.primary',
                  '&:hover': {
                    bgcolor: 'secondary.primary',
                  }
                }
              }}
        >
            {/* {actions.map((action) => (
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => action.url }
            />
        ))} */}
            <SpeedDialAction
                icon={<FacebookIcon />}
                tooltipTitle={"Facebook"}
                onClick={() => window.open('https://vi-vn.facebook.com/', 'popUpWindow', 'height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no')}
            // tooltipOpen
            />

            <SpeedDialAction
                icon={<CallIcon />}
                tooltipTitle={"CallMe"}
                onClick={() => window.location = 'tel:+0911140055'}
            // tooltipOpen

            />
        </SpeedDial>
    )
}

export default ToolBox