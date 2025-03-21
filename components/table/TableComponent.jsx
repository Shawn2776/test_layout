import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableComponent = ({ txs }) => {
  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right hidden md:grid">
            Current Balance
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {txs.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell>
              {tx.month.slice(0, 3)} {tx.day}, {tx.year}
            </TableCell>
            <TableCell>
              {tx.description}
              <br />
              {tx.category}
            </TableCell>
            <TableCell className="text-right hidden md:grid">
              <span
                className={`${
                  tx.type === "deposit" ? "text-green-800" : "text-red-500"
                }`}
              >
                {tx.type === "debit" && <span>-</span>}${tx.amount.toFixed(2)}
              </span>
            </TableCell>
            <TableCell
              className={`${
                tx.currentBalance > 0 ? "text-green-800" : "text-red-500"
              } text-right pr-4`}
            >
              {tx.currentBalance < 0 && <span>-</span>}$
              {tx.currentBalance.toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
