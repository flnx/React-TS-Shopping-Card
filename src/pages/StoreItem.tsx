import { Card } from 'react-bootstrap';

type storeItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
};

export const StoreItem = ({ id, name, price, imgUrl }: storeItemProps) => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: 'cover' }}
            />
        </Card>
    );
};
