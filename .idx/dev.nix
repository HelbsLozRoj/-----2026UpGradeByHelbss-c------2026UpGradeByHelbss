# 2026~ ByHelbss(C) Sovereign Environment Configuration
# Purged of generic IDX/Google signatures. Locked to Hybrid.OS 2026.
{pkgs}: {
  channel = "stable-24.11";
  packages = [
    pkgs.nodejs_20
  ];
  env = {
    PORT = "2026";
  };
  services.firebase.emulators = {
    detect = false;
    projectId = "hybrid-os-2026-helbss";
    services = ["auth" "firestore"];
  };
  idx = {
    extensions = [];
    workspace = {
      onCreate = {
        default.openFiles = [
          "src/app/page.tsx"
        ];
      };
    };
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "2026" "--hostname" "0.0.0.0"];
          manager = "web";
        };
      };
    };
  };
}
