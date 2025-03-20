import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AccountSidebar = ({ info }) => {
  const { title, amount, acctNumber } = info;
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>${amount}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{acctNumber}</p>
      </CardContent>
    </Card>
  );
};

export default AccountSidebar;
