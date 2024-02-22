import { useContext, useEffect, useState } from 'react';
import { Pagination } from '../component/Pagination';
import { Footer } from '../component/Footer';
import { PhonesInfo } from '../component/PhonesInfo';
import { ProductsList } from '../component/ProductsList';
import { ProductFilters } from '../component/ProductFilters';
import { ProductContext } from '../ProductContext';
import { Loader } from '../component/Loader';
import { getPhones } from '../api/api';

export const PhonePage = () => {
  const { phones, setPhones } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const phonesData = await getPhones();

        setPhones(phonesData);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchData();
  }, [setPhones]);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="PhonePage">
      <PhonesInfo />
      <ProductFilters />
      <ProductsList product={phones} />
      <Pagination />
      <Footer />
    </div>
  );
};
