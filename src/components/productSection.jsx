import SliderCarousel from "./carousel";
import fs from 'fs';
import path from 'path';
export async function getServerSideProps() {
    // Path to the images directory
    const imagesDir = path.join(process.cwd(), 'public', 'images', 'carousel');
    
    // Read the directory and filter out non-image files
    const imageFiles = fs.readdirSync(imagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
  
    return {
      props: {
        imagePaths: imageFiles,
      },
    };
  }
export default function Products({imagePaths })
{
    return(
        <div>
            <SliderCarousel imagePaths={imagePaths}/>
        </div>
    )
}