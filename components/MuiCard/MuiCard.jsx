import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MuiCard = ({ name, description, status, assignedTo, dueDate }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {status}
          </Typography>

          <Typography variant='h5' component='div'>
            {name}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {dueDate}
          </Typography>

          <Typography variant='body2'>{description}</Typography>
        </CardContent>

        <CardActions>
          <Button size='small'>{assignedTo}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
