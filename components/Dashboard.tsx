"use client";
import {
  AreaChart,
  Card,
  CategoryBar,
  Divider,
  DonutChart,
  List,
  ListItem,
  ProgressBar,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

import { RiExternalLinkLine } from "@remixicon/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const data3 = [
  {
    name: "Travel",
    amount: 6730,
    share: "32.1%",
    color: "bg-cyan-500",
  },
  {
    name: "IT & equipment",
    amount: 4120,
    share: "19.6%",
    color: "bg-blue-500",
  },
  {
    name: "Training & development",
    amount: 3920,
    share: "18.6%",
    color: "bg-indigo-500",
  },
  {
    name: "Office supplies",
    amount: 3210,
    share: "15.3%",
    color: "bg-violet-500",
  },
  {
    name: "Communication",
    amount: 3010,
    share: "14.3%",
    color: "bg-fuchsia-500",
  },
];

const currencyFormatter = (number: any) => {
  return "$" + Intl.NumberFormat("us").format(number).toString();
};

const data = [
  {
    date: "Jan 23",
    "This year": 10200,
    "Last year": 3800,
  },
  {
    date: "Feb 23",
    "This year": 15100,
    "Last year": 6910,
  },
  {
    date: "Mar 23",
    "This year": 16100,
    "Last year": 7210,
  },
  {
    date: "Apr 23",
    "This year": 17100,
    "Last year": 9200,
  },
  {
    date: "May 23",
    "This year": 24800,
    "Last year": 9100,
  },
  {
    date: "Jun 23",
    "This year": 20500,
    "Last year": 10210,
  },
  {
    date: "Jul 23",
    "This year": 22130,
    "Last year": 10810,
  },
  {
    date: "Aug 23",
    "This year": 28100,
    "Last year": 12120,
  },
  {
    date: "Sep 23",
    "This year": 31700,
    "Last year": 10620,
  },
  {
    date: "Oct 23",
    "This year": 32230,
    "Last year": 11350,
  },
  {
    date: "Nov 23",
    "This year": 42200,
    "Last year": 12550,
  },
  {
    date: "Dec 23",
    "This year": 59100,
    "Last year": 22150,
  },
];

const summary = [
  {
    name: "This year",
    total: 277760,
    color: "bg-blue-500",
  },
  {
    name: "Last year",
    total: 120420,
    color: "bg-violet-500",
  },
];

const valueFormatter = (number: any) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

const data2 = [
  {
    date: "Dec 23",
    description: "Venture debt loan repayment",
    account: "Calantis business account",
    amount: "-$1,200",
    changeType: "negative",
  },
  {
    date: "Nov 23",
    description: "Venture debt loan repayment",
    account: "Calantis business account",
    amount: "-$2,200",
    changeType: "negative",
  },
  {
    date: "Oct 23",
    description: "Venture debt loan repayment",
    account: "Calantis business account",
    amount: "-$1,200",
    changeType: "negative",
  },
  {
    date: "Sep 23",
    description: "Venture debt loan funding",
    account: "Calantis business account",
    amount: "+$5,000,000",
    changeType: "positive",
  },
];

function Dashboard() {
  return (
    <div className="max-w-screen-xl flex flex-col mx-auto my-20 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {new Array(4).fill(null).map((_, i) => {
          return (
            <Card className="mx-auto max-w-md" key={i}>
              <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Sales
              </h4>
              <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                $71,465
              </p>
              <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                <span>32% of annual target</span>
                <span>$225,000</span>
              </p>
              <ProgressBar value={32} className="mt-2" />
            </Card>
          );
        })}
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card className="sm:mx-auto sm:max-w-xl">
          <div className="flex items-center space-x-2">
            <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Revenue
            </h3>
            <span className="mt-0.5 inline-flex rounded bg-emerald-100 px-1.5 py-0.5 text-tremor-label font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
              +2.3%
            </span>
          </div>
          <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Current year vs. same period last year
          </p>
          <Divider className="my-3" />
          <div className="flex items-center gap-10">
            {summary.map((category) => (
              <div key={category.name}>
                <div className="flex items-center space-x-2">
                  <span
                    className={classNames(
                      category.color,
                      "h-2.5 w-2.5 rounded-sm"
                    )}
                    aria-hidden={true}
                  />
                  <p className="text-tremor-label text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                    {category.name}
                  </p>
                </div>
                <p className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {valueFormatter(category.total)}
                </p>
              </div>
            ))}
          </div>
          <AreaChart
            data={data}
            index="date"
            categories={["This year", "Last year"]}
            colors={["blue", "violet"]}
            valueFormatter={valueFormatter}
            showLegend={false}
            showYAxis={false}
            showGradient={false}
            startEndOnly={true}
            className="mt-8 h-48"
          />
        </Card>

        <Card className="sm:mx-auto sm:max-w-xl">
          <div className="flex items-center space-x-2">
            <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Revenue
            </h3>
            <span className="mt-0.5 inline-flex rounded bg-emerald-100 px-1.5 py-0.5 text-tremor-label font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
              +2.3%
            </span>
          </div>
          <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Current year vs. same period last year
          </p>
          <Divider className="my-3" />
          <div className="flex items-center gap-10">
            {summary.map((category) => (
              <div key={category.name}>
                <div className="flex items-center space-x-2">
                  <span
                    className={classNames(
                      category.color,
                      "h-2.5 w-2.5 rounded-sm"
                    )}
                    aria-hidden={true}
                  />
                  <p className="text-tremor-label text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                    {category.name}
                  </p>
                </div>
                <p className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {valueFormatter(category.total)}
                </p>
              </div>
            ))}
          </div>
          <AreaChart
            data={data}
            index="date"
            categories={["This year", "Last year"]}
            colors={["blue", "violet"]}
            valueFormatter={valueFormatter}
            showLegend={false}
            showYAxis={false}
            showGradient={false}
            startEndOnly={true}
            className="mt-8 h-48"
          />
        </Card>
      </div>

      <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <Card className="sm:mx-auto sm:max-w-xl">
          <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Total expenses by category
          </h3>
          <DonutChart
            className="mt-8"
            data={data3}
            category="amount"
            index="name"
            valueFormatter={currencyFormatter}
            showTooltip={false}
            colors={["cyan", "blue", "indigo", "violet", "fuchsia"]}
          />
          <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
            <span>Category</span>
            <span>Amount / Share</span>
          </p>
          <List className="mt-2">
            {data3.map((item) => (
              <ListItem key={item.name} className="space-x-6">
                <div className="flex items-center space-x-2.5 truncate">
                  <span
                    className={classNames(
                      item.color,
                      "h-2.5 w-2.5 shrink-0 rounded-sm"
                    )}
                    aria-hidden={true}
                  />
                  <span className="truncate dark:text-dark-tremor-content-emphasis">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    {currencyFormatter(item.amount)}
                  </span>
                  <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                    {item.share}
                  </span>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>

        <Card className="sm:mx-auto sm:max-w-xl">
          <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Total expenses by category
          </h3>
          <DonutChart
            className="mt-8"
            data={data3}
            category="amount"
            index="name"
            valueFormatter={currencyFormatter}
            showTooltip={false}
            colors={["cyan", "blue", "indigo", "violet", "fuchsia"]}
          />
          <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
            <span>Category</span>
            <span>Amount / Share</span>
          </p>
          <List className="mt-2">
            {data3.map((item) => (
              <ListItem key={item.name} className="space-x-6">
                <div className="flex items-center space-x-2.5 truncate">
                  <span
                    className={classNames(
                      item.color,
                      "h-2.5 w-2.5 shrink-0 rounded-sm"
                    )}
                    aria-hidden={true}
                  />
                  <span className="truncate dark:text-dark-tremor-content-emphasis">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    {currencyFormatter(item.amount)}
                  </span>
                  <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                    {item.share}
                  </span>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>

      <div className="mt-10">
        <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          Analyze and manage your venture debt and balance.
        </p>
        <TabGroup defaultIndex={0} className="mt-6">
          <TabList>
            <Tab>Venture Debt</Tab>
            <Tab>Capital Guide</Tab>
          </TabList>

          <TabPanel></TabPanel>
        </TabGroup>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabPanels>, <TabPanel> to make it functional and to add content for other tabs */}
        <div className="mt-10 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="md:col-span-2">
            <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Outstanding balance
            </h4>
            <p className="mt-1 text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              $5,450,000
            </p>
            <CategoryBar
              values={[73, 22, 5]}
              colors={["blue", "cyan", "fuchsia"]}
              showLabels={false}
              className="mt-6"
            />
            <ul
              role="list"
              className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <li className="flex items-center space-x-2">
                <span
                  className="h-3 w-3 shrink-0 rounded-sm bg-blue-500"
                  aria-hidden={true}
                />
                <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                  <span className="font-medium text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                    $4M
                  </span>{" "}
                  outstanding
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="h-3 w-3 shrink-0 rounded-sm bg-cyan-500"
                  aria-hidden={true}
                />
                <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                  <span className="font-medium text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                    $1.2M
                  </span>{" "}
                  available today
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="h-3 w-3 shrink-0 rounded-sm bg-fuchsia-500"
                  aria-hidden={true}
                />
                <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                  <span className="font-medium text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                    $0.25M
                  </span>{" "}
                  unavailable
                </span>
              </li>
            </ul>
            <Divider />
            <p className="mt-6 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content">
              Interest only ends Jan 4, 2024
            </p>
            <div className="mt-4 rounded-lg bg-tremor-background-muted p-4 dark:bg-dark-tremor-background-muted">
              <p className="flex flex-wrap justify-between gap-4 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                Next payment of $3,200 due Jan 1, 2024.
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-tremor-brand hover:underline hover:underline-offset-4 dark:text-dark-tremor-brand"
                >
                  Learn more
                  <RiExternalLinkLine className="h-4 w-4" aria-hidden={true} />
                </a>
              </p>
            </div>
          </Card>
          <div className="md:col-span-1 md:p-6">
            <h4 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Questions?
            </h4>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Contact your financial advisor
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-tremor-full bg-tremor-background-subtle text-tremor-default font-medium text-tremor-brand dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-brand"
                aria-hidden={true}
              >
                EL
              </span>
              <div>
                <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Emily Liftburg
                </p>
                <a
                  href="mailto:#"
                  className="mt-0.5 block text-tremor-default text-tremor-brand dark:text-dark-tremor-brand"
                >
                  emily.liftburg@company.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-14 font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Transactions
        </p>
        <Table className="mt-8">
          <TableHead>
            <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Date
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Description
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Account
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Amount
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data2.map((item) => (
              <TableRow key={item.date}>
                <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.date}
                </TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.account}</TableCell>
                <TableCell className="text-right">
                  <span
                    className={classNames(
                      item.changeType === "positive"
                        ? "text-emerald-700 dark:text-emerald-500"
                        : "text-tremor-content-strong dark:text-dark-tremor-content-strong",
                      "font-medium"
                    )}
                  >
                    {item.amount}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
