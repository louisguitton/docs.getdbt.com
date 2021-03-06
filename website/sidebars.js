module.exports = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        "docs/introduction",
      ],
    },
    {
      type: "category",
      label: "Supported Databases",
      items: [
        "docs/supported-databases",
        "docs/supported-databases/profile-postgres",
        "docs/supported-databases/profile-redshift",
        "docs/supported-databases/profile-snowflake",
        "docs/supported-databases/profile-bigquery",
        "docs/supported-databases/profile-presto",
        "docs/supported-databases/profile-spark",
        "docs/supported-databases/profile-mssql",
      ],
    },
    {
      type: "category",
      label: "Building a dbt Project",
      collapsed: false,
      items: [
        "docs/building-a-dbt-project/projects",
        {
          type: "category",
          label: "Models",
          items: [
            "docs/building-a-dbt-project/building-models",
            "docs/building-a-dbt-project/building-models/materializations",
            "docs/building-a-dbt-project/building-models/configuring-incremental-models",
            "docs/building-a-dbt-project/building-models/using-custom-aliases",
            "docs/building-a-dbt-project/building-models/using-custom-schemas",
            "docs/building-a-dbt-project/building-models/using-custom-database",
            "docs/building-a-dbt-project/building-models/using-variables",
          ],
        },
        "docs/building-a-dbt-project/tests",
        "docs/building-a-dbt-project/documentation",
        "docs/building-a-dbt-project/using-sources",
        "docs/building-a-dbt-project/seeds",
        "docs/building-a-dbt-project/snapshots",
        "docs/building-a-dbt-project/jinja-macros",
        "docs/building-a-dbt-project/hooks-operations",
        //"docs/building-a-dbt-project/dont-nest-your-curlies",
        //"docs/building-a-dbt-project/archival",
        "docs/building-a-dbt-project/package-management",
        "docs/building-a-dbt-project/analyses",
      ],
    },
    {
      type: "category",
      label: "Running a dbt Project",
      items: [
        {
          type: "category",
          label: "dbt Command Reference",
          items: [
            "docs/running-a-dbt-project/command-line-interface",
            "docs/running-a-dbt-project/command-line-interface/model-selection-syntax",
            "docs/running-a-dbt-project/command-line-interface/global-cli-flags",
            "docs/running-a-dbt-project/command-line-interface/clean",
            "docs/running-a-dbt-project/command-line-interface/cmd-docs",
            "docs/running-a-dbt-project/command-line-interface/compile",
            "docs/running-a-dbt-project/command-line-interface/debug",
            "docs/running-a-dbt-project/command-line-interface/deps",
            "docs/running-a-dbt-project/command-line-interface/init",
            "docs/running-a-dbt-project/command-line-interface/list",
            "docs/running-a-dbt-project/command-line-interface/rpc",
            "docs/running-a-dbt-project/command-line-interface/run",
            "docs/running-a-dbt-project/command-line-interface/run-operation",
            "docs/running-a-dbt-project/command-line-interface/seed",
            "docs/running-a-dbt-project/command-line-interface/snapshot",
            "docs/running-a-dbt-project/command-line-interface/source",
            "docs/running-a-dbt-project/command-line-interface/test",
            "docs/running-a-dbt-project/command-line-interface/version",
            "docs/running-a-dbt-project/command-line-interface/exit-codes",
          ],
        },
        "docs/running-a-dbt-project/using-the-dbt-ide",
        {
          type: "category",
          label: "Using the CLI",
          items: [
            "docs/running-a-dbt-project/using-the-command-line-interface",
            "docs/running-a-dbt-project/using-the-command-line-interface/installation",
            "docs/running-a-dbt-project/using-the-command-line-interface/configure-your-profile",
            {
              type: "category",
              label: "Installation instructions",
              items: [
                "docs/running-a-dbt-project/using-the-command-line-interface/macos",
                "docs/running-a-dbt-project/using-the-command-line-interface/windows",
                "docs/running-a-dbt-project/using-the-command-line-interface/ubuntu-debian",
                "docs/running-a-dbt-project/using-the-command-line-interface/centos",
                "docs/running-a-dbt-project/using-the-command-line-interface/install-from-source",
              ],
            },
          ],
        },
        "docs/running-a-dbt-project/dbt-api",
        "docs/running-a-dbt-project/running-dbt-in-production",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "docs/guides/best-practices",
        "docs/guides/managing-environments",
        "docs/guides/writing-custom-schema-tests",
        "docs/guides/building-packages",
        "docs/guides/creating-new-materializations",
        {
          type: "category",
          label: "Migration Guides",
          items: [
            "docs/guides/migration-guide/upgrading-from-0-10-to-0-11",
            "docs/guides/migration-guide/upgrading-to-0-12-0",
            "docs/guides/migration-guide/upgrading-to-0-13-0",
            "docs/guides/migration-guide/upgrading-to-014",
            "docs/guides/migration-guide/upgrading-to-0-14-1",
            "docs/guides/migration-guide/upgrading-to-0-15-0",
            "docs/guides/migration-guide/upgrading-to-0-16-0",
            "docs/guides/migration-guide/upgrading-to-0-17-0",
          ],
        },
        "docs/guides/videos",
        //"docs/guides/database-specific-guides/creating-date-partitioned-tables", // deprecated
      ],
    },
    {
      type: "category",
      label: "Contributing",
      items: [
        "docs/contributing/contributor-license-agreements",
        "docs/contributing/building-a-new-adapter",
        "docs/contributing/slack-rules-of-the-road",
      ],
    },
    {
      type: "category",
      label: "About",
      items: [
        "docs/about/license",
        "docs/about/viewpoint",
      ],
    },
  ],
  "dbt Cloud": [
    "docs/dbt-cloud/cloud-overview",
    "docs/dbt-cloud/cloud-quickstart",
    "docs/dbt-cloud/the-dbt-ide",
    {
      type: "category",
      label: "Configuring dbt Cloud",
      items: [
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-your-database",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-using-a-managed-repository",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-configuring-repositories",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-installing-the-github-application",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-import-a-project-by-git-url",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-managing-permissions",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-seats-and-users",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-supported-dbt-versions",
      ],
    },
    {
      type: "category",
      label: "Using dbt Cloud",
      items: [
        "docs/dbt-cloud/using-dbt-cloud/cloud-enabling-continuous-integration-with-github",
        "docs/dbt-cloud/using-dbt-cloud/cloud-generating-documentation",
        "docs/dbt-cloud/using-dbt-cloud/cloud-snapshotting-source-freshness",
        "docs/dbt-cloud/using-dbt-cloud/artifacts",
        "docs/dbt-cloud/using-dbt-cloud/cloud-using-a-custom-cron-schedule",
        "docs/dbt-cloud/using-dbt-cloud/cloud-setting-a-custom-target-name",
      ],
    },
    {
      type: "category",
      label: "dbt Cloud Enterprise",
      items: [
        "docs/dbt-cloud/dbt-cloud-enterprise",
        {
            type: "category",
            label: "Single Sign On",
            items: [
                "docs/dbt-cloud/dbt-cloud-enterprise/sso-overview",
                "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-okta",
                "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-google-gsuite",
                "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-enterprise-sso-with-azure-active-directory",
            ],
        },
        {
            type: "category",
            label: "Database Auth",
            items: [
                "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-enterprise-snowflake-oauth",
            ],
        },
        {
            type: "category",
            label: "Permissions",
            items: [
                "docs/dbt-cloud/dbt-cloud-enterprise/enterprise-permissions",
            ],
        },
      ],
    },
    {
      type: "category",
      label: "On-Premises",
      items: [
        "docs/dbt-cloud/on-premises/index",
        "docs/dbt-cloud/on-premises/architecture",
        "docs/dbt-cloud/on-premises/prerequisites",
        "docs/dbt-cloud/on-premises/system-requirements",
        "docs/dbt-cloud/on-premises/installation",
        "docs/dbt-cloud/on-premises/setup",
        "docs/dbt-cloud/on-premises/usage-statistics",
      ],
    },
    "docs/dbt-cloud/cloud-changelog",
  ],
  reference: [
    {
      type: "category",
      label: "Configurations",
      items: [
        "reference/dbt_project.yml",
        {
          type: "category",
          label: "Project configurations",
          items: [
            "reference/project-configs/analysis-paths",
            "reference/project-configs/clean-targets",
            "reference/project-configs/config-version",
            "reference/project-configs/data-paths",
            "reference/project-configs/docs-paths",
            "reference/project-configs/log-path",
            "reference/project-configs/macro-paths",
            "reference/project-configs/modules-path",
            "reference/project-configs/name",
            "reference/project-configs/on-run-start-on-run-end",
            "reference/project-configs/profile",
            "reference/project-configs/query-comment",
            "reference/project-configs/quoting",
            "reference/project-configs/require-dbt-version",
            "reference/project-configs/snapshot-paths",
            "reference/project-configs/source-paths",
            "reference/project-configs/target-path",
            "reference/project-configs/test-paths",
            "reference/project-configs/version",
          ],
        },
        "reference/model-configs",
        "reference/seed-configs",
        "reference/source-configs",
        "reference/snapshot-configs",
        {
          type: "category",
          label: "List of general configs",
          items: [
            "reference/resource-configs/alias",
            "reference/resource-configs/database",
            "reference/resource-configs/enabled",
            "reference/resource-configs/persist_docs",
            "reference/resource-configs/pre-hook-post-hook",
            "reference/resource-configs/schema",
            "reference/resource-configs/tags",
          ],
        },
        {
          type: "category",
          label: "List of model configs",
          items: [
            "reference/resource-configs/materialized",
            "reference/resource-configs/sql_header",
          ],
        },
        {
          type: "category",
          label: "List of seed configs",
          items: [
            "reference/resource-configs/column_types",
            "reference/resource-configs/quote_columns",
          ],
        },
        {
          type: "category",
          label: "List of snapshot configs",
          items: [
            "reference/resource-configs/check_cols",
            "reference/resource-configs/strategy",
            "reference/resource-configs/target_database",
            "reference/resource-configs/target_schema",
            "reference/resource-configs/unique_key",
            "reference/resource-configs/updated_at",
          ],
        },
        "reference/resource-configs/bigquery-configs",
        "reference/resource-configs/redshift-configs",
        "reference/resource-configs/snowflake-configs",
        "reference/resource-configs/spark-configs",
        "reference/advanced-config-usage",
      ],
    },
    {
      type: "category",
      label: "Properties",
      items: [
        "reference/declaring-properties",
        "reference/model-properties",
        "reference/source-properties",
        "reference/seed-properties",
        "reference/snapshot-properties",
        "reference/analysis-properties",
        "reference/macro-properties",
        {
          type: "category",
          label: "List of general properties",
          items: [
            "reference/resource-properties/description",
            "reference/resource-properties/docs",
            "reference/resource-properties/meta",
            "reference/resource-properties/quote",
            "reference/resource-properties/tags",
            "reference/resource-properties/tests",
          ],
        },
        {
          type: "category",
          label: "List of source properties",
          items: [
            "reference/resource-properties/database",
            "reference/resource-properties/freshness",
            "reference/resource-properties/identifier",
            "reference/resource-properties/loader",
            "reference/resource-properties/quoting",
            "reference/resource-properties/schema",
            "reference/resource-properties/overrides",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Jinja Reference",
      items: [
        "reference/dbt-jinja-functions",
        {
          type: "category",
          label: "List of dbt Jinja functions",
          items: [
            "reference/dbt-jinja-functions/adapter",
            "reference/dbt-jinja-functions/as_text",
            "reference/dbt-jinja-functions/builtins",
            "reference/dbt-jinja-functions/config",
            "reference/dbt-jinja-functions/dbt_version",
            "reference/dbt-jinja-functions/debug-method",
            "reference/dbt-jinja-functions/doc",
            "reference/dbt-jinja-functions/env_var",
            "reference/dbt-jinja-functions/exceptions",
            "reference/dbt-jinja-functions/execute",
            "reference/dbt-jinja-functions/flags",
            "reference/dbt-jinja-functions/fromjson",
            "reference/dbt-jinja-functions/fromyaml",
            "reference/dbt-jinja-functions/graph",
            "reference/dbt-jinja-functions/invocation_id",
            "reference/dbt-jinja-functions/log",
            "reference/dbt-jinja-functions/modules",
            "reference/dbt-jinja-functions/project_name",
            "reference/dbt-jinja-functions/ref",
            "reference/dbt-jinja-functions/return",
            "reference/dbt-jinja-functions/run_query",
            "reference/dbt-jinja-functions/run_started_at",
            "reference/dbt-jinja-functions/schema",
            "reference/dbt-jinja-functions/source",
            "reference/dbt-jinja-functions/statement-blocks",
            "reference/dbt-jinja-functions/target",
            "reference/dbt-jinja-functions/this",
            "reference/dbt-jinja-functions/tojson",
            "reference/dbt-jinja-functions/toyaml",
            "reference/dbt-jinja-functions/var",
            "reference/dbt-jinja-functions/profiles-yml-context",
            "reference/dbt-jinja-functions/dbt-project-yml-context",
            "reference/dbt-jinja-functions/on-run-end-context",
          ],
        },
        "reference/dbt-classes",
      ],
    },
    "reference/dbt-artifacts"
  ],
  tutorial: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "tutorial/setting-up",
        {
          type: "category",
          label: "Create a project",
          items: [
            "tutorial/create-a-project-dbt-cloud",
            "tutorial/create-a-project-dbt-cli",
          ],
        },
        "tutorial/build-your-first-models",
        "tutorial/test-and-document-your-project",
        "tutorial/deploy-your-project",
      ],
    },
    {
      type: "category",
      label: "Leveling up",
      collapsed: false,
      items: [
        "tutorial/using-jinja",
      ]
    }
  ],
  learn: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        "learn/setting-up",
        {
          type: "category",
          label: "Create a project",
          items: [
            "learn/create-a-project-dbt-cloud",
            "learn/create-a-project-dbt-cli",
          ],
        },
        "learn/build-your-first-models",
        "learn/test-and-document-your-project",
      ],
    },
  ],
};
