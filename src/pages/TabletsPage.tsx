import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../ProductContext';
import { getTablets } from '../api/api';
import { Loader } from '../component/Loader';
import { NoResults } from '../component/NoResults';
import { Footer } from '../component/Footer';

export const TabletsPage = () => {
  const { tablets, setTablets } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const phonesData = await getTablets();

        setTablets(phonesData);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchData();
  }, [setTablets]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section className="tables">
        <div className="container">
          {!tablets.length
            ? (<NoResults name="Tablets" />)
            : (<h1> Tables </h1>)}
        </div>
      </section>
      <Footer />
    </>
  );
};
