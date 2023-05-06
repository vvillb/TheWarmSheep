import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearBreadcrumbs } from '../../store/slices/breadcrumbSlice';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';


export default function Breadcrumbs() {
    const dispatch = useDispatch();


    useEffect(() => {
        const handlePopState = () => {
          dispatch(clearBreadcrumbs());
        };
        window.addEventListener('popstate', handlePopState);
    
        return () => {
          window.removeEventListener('popstate', handlePopState);
        };
      }, [dispatch]);

      const breadcrumbs = useSelector((state) => state.breadcrumbs);
  return (
    <Grid container  
    direction="row"
    position="fixed"
     justifyContent='left'
    alignItems="center"
        sx={{
        padding:'1%',
        backgroundColor: 'primary.main',
        // left: 0, 
        // right: 0,
        maxHeight:50,
        minWidth:'100vw',
        alignContent:'center'
        
    }}>
         <Link to="/" className='hyperlink'><HomeIcon/></Link>
         <nav className="w-full pl-32">
        <ol>
          {breadcrumbs.map((item, index) => (
            <span key={index}>
              <Link to={item.path} className='hyperlink'>
                {item.label}
              </Link>
              {index < breadcrumbs.length - 1 && <span ></span>}
            </span>
          ))}
        </ol>
      </nav>
    </Grid>
  )
}
