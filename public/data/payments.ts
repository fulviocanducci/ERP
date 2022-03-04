export const paymentsData = [
  {
    Header: "ID",
    accessor: "id" as const,
    type: "text",
    required: true,
    disabled: true,
  },
  {
    Header: "Created At",
    accessor: "created_at" as const,
    type: "datetime-local",
    required: false,
    disabled: true,
  },
  {
    Header: "Created By",
    accessor: "created_by" as const,
    type: "text",
    required: true,
    disabled: true,
  },
  {
    Header: "company_name",
    accessor: "company_name" as const,
    type: "text",
    required: true,
    disabled: false,
  },
  {
    Header: "company_id",
    accessor: "company_id" as const,
    type: "number",
    required: true,
    disabled: false,
  },
  {
    Header: "payment_type",
    accessor: "payment_type" as const,
    type: "text",
    required: true,
    disabled: false,
  },
  {
    Header: "amount_received",
    accessor: "amount_received" as const,
    type: "number",
    required: true,
    disabled: false,
  },
  {
    Header: "amount_pending",
    accessor: "amount_pending" as const,
    type: "number",
    required: true,
    disabled: false,
  },
  {
    Header: "amount_overdue",
    accessor: "amount_overdue" as const,
    type: "number",
    required: true,
  },
  {
    Header: "Group",
    accessor: "group_" as const,
    type: "dropdown",
    required: true,
    disabled: false,
  },
  {
    Header: "Last Updated",
    accessor: "last_updated" as const,
    type: "datetime-local",
    required: false,
    disabled: true,
  },
  {
    Header: "Updated By",
    accessor: "updated_by" as const,
    type: "text",
    required: true,
    disabled: true,
  },
  {
    Header: "Comments",
    accessor: "comments_" as const,
    type: "text",
    required: true,
    disabled: false,
  },
];