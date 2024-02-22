import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../ProductContext';
import { Loader } from '../component/Loader';
import { NoResults } from '../component/NoResults';
import { getAccessories } from '../api/api';
import { Footer } from '../component/Footer';

export const AccessoriesPage = () => {
  const { accessories, setAccessories } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const phonesData = await getAccessories();

        setAccessories(phonesData);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchData();
  }, [setAccessories]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section className="accessories">
        <div className="container">
          {!accessories.length
            ? (<NoResults name="Accessories" />)
            : (<h1> Accessories </h1>)}
        </div>
      </section>
      <Footer />
    </>
  );
};
